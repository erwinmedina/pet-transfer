const Pet = require('../../models/pet');
const uuid = require('uuid');
const {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
  } = require("@aws-sdk/client-s3");
const BASE_URL = process.env.S3_BASE_URL;
const BUCKET = process.env.S3_BUCKET;
const REGION = process.env.REGION;

module.exports = {
    getAll,
    petFindOne,
    petCreate,
    petDelete,
    petUpdate,
};

async function getAll(req, res) {
    const animals = await Pet.find({})
    .populate({
      path: 'user',
      populate: { path: 'user'}
    }).exec();
    res.json(animals);
}

async function petFindOne(req, res) {
  const pet = await Pet.findById(req.params.id)    
  .populate({
    path: 'user',
    populate: { path: 'user'}
  }).exec();
  res.json(pet);
}

async function petCreate(req, res) {
  let awsData;
  if (req.file) {
      awsData = await getNewImageUrl(req.file);
  }
  const newPet = await Pet.create({
      ...req.body, 
      user: req.user._id, 
      sourceURL: awsData ? awsData.url : "", 
      AWSKey: awsData ? awsData.key : "",
  })
  setTimeout(() => {
      res.json(newPet);
  }, 1000);
}

async function petUpdate(req, res) {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updatedPet);
}

async function petDelete(req, res) {
    const deletingPet = await Pet.findOneAndDelete({ _id: req.params.id });
    deleteImage(deletingPet.AWSKey)
    res.json('');
}

/*-----Helper Functions-----*/
function generateAWSKey(photo) {
    const hex = uuid.v4().slice(uuid.v4().length-6);
    const fileExtension = photo.mimetype.match(/[/](.*)/)[1].replace('', '.');
    return hex + fileExtension;
  }
  async function getNewImageUrl(photo) {
    const uploadParams = {
      Bucket: BUCKET,
      Key: generateAWSKey(photo),
      Body: photo.buffer
    }
    const s3 = new S3Client({ region: REGION });
    const run = async () => {
      try {
        const data = await s3.send(new PutObjectCommand(uploadParams));
        console.log(`Successfully uploaded ${uploadParams.Key}:`, data);
      } catch (err) {
        console.log("Error", err);
      }
    };
    run();
    return {
      url: `${BASE_URL}${BUCKET}/${uploadParams.Key}`,
      key: uploadParams.Key,
    } 
  }
  async function deleteImage(key) {
    const uploadParams = {
      Bucket: process.env.S3_BUCKET,
      Key: key,
    }
    const s3 = new S3Client({ region: REGION });
    const run = async () => {
      try {
        await s3.send(new DeleteObjectCommand(uploadParams));
        console.log("Successfully deleted", key);
      } catch (err) {
        console.log("Error", err);
      }
    };
    run();
  }