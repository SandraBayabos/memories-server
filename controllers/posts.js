import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  // res.send("This works");
  try {
    const postMessages = await PostMessage.find()

    console.log(postMessages)

    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
};

export const createPosts = async (req, res) => {
  // res.send('Post creation')
  const post = req.body;

  const newPost = new postMessage(post);

  try {
    await newPost.save()

    res.status(202).json(newPost)
  } catch (error) {
    res.status(409).json(error.message)
  }
}
