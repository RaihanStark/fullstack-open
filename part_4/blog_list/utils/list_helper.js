const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((acc, curr) => acc + curr.likes, 0);
};

const favoriteBlog = (blogs) => {
  let maxLikes = 0;
  let favoriteBlog;

  blogs.forEach((blog) => {
    if (blog.likes >= maxLikes) {
      maxLikes = blog.likes
      favoriteBlog = blog
    }
  })
  return {
    author: favoriteBlog.author,
    likes: favoriteBlog.likes,
    title: favoriteBlog.title
  }
}

const mostBlog = (blogs) => {
  let topBlogger = {}
  let mostBlog = 0;
  let most;

  blogs.forEach((blog) => {
    topBlogger[blog.author] = (topBlogger[blog.author] || 0) + 1
    if (topBlogger[blog.author] >= mostBlog) {
      mostBlog = topBlogger[blog.author]
      most = {
        author: blog.author,
        blogs: topBlogger[blog.author]
      }
    }
  })

  return most
}

const mostLikes = (blogs) => {
  let topBlogger = {}
  let mostBlog = 0;
  let most;

  blogs.forEach((blog) => {
    topBlogger[blog.author] = (topBlogger[blog.author] || 0) + blog.likes
    if (topBlogger[blog.author] >= mostBlog) {
      mostBlog = topBlogger[blog.author]
      most = {
        author: blog.author,
        likes: topBlogger[blog.author]
      }
    }
  })

  return most
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlog,
  mostLikes
};