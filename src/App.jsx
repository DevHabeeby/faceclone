
import { useState } from "react";
import {
  Search,
  Home,
  Users,
  Store,
  Gamepad2,
  Menu,
  Bell,
  MessageCircle,
  ThumbsUp,
  Share2,
  MoreHorizontal,
  Image,
  Smile,
  Video,
  Send,
  X,
  ChevronDown,
  Bookmark,
  CalendarDays,
  Clock,
} from "lucide-react";
import "./App.css";

const initialPosts = [
  {
    id: 1,
    name: "Sophia Williams",
    avatar: "https://i.pravatar.cc/150?img=47",
    time: "2 hours ago",
    text: "Enjoying a beautiful day outside! Sometimes the simple moments are the best moments. ☀️",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
    likes: 128,
    comments: 24,
    liked: false,
  },
  {
    id: 2,
    name: "Daniel Johnson",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "4 hours ago",
    text: "A little inspiration for your day. Keep learning, keep growing, and never stop believing in yourself! 🚀",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000",
    likes: 86,
    comments: 13,
    liked: false,
  },
  {
    id: 3,
    name: "Amara James",
    avatar: "https://i.pravatar.cc/150?img=44",
    time: "Yesterday",
    text: "Weekend adventures with amazing people. Making memories! ❤️",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000",
    likes: 204,
    comments: 39,
    liked: false,
  },
];

const stories = [
  {
    name: "Create story",
    image: "https://i.pravatar.cc/150?img=11",
    create: true,
  },
  {
    name: "Sophia",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Daniel",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Amara",
    image: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Michael",
    image: "https://i.pravatar.cc/150?img=13",
  },
];

const friends = [
  { name: "Sophia Williams", image: "https://i.pravatar.cc/150?img=47" },
  { name: "Daniel Johnson", image: "https://i.pravatar.cc/150?img=12" },
  { name: "Amara James", image: "https://i.pravatar.cc/150?img=44" },
  { name: "Michael Brown", image: "https://i.pravatar.cc/150?img=13" },
  { name: "Olivia Smith", image: "https://i.pravatar.cc/150?img=45" },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");
  const [commentText, setCommentText] = useState({});
  const [comments, setComments] = useState({});
  const [openComments, setOpenComments] = useState({});
  const [search, setSearch] = useState("");

  const currentUser = {
    name: "Habeeb",
    image: "https://i.pravatar.cc/150?img=11",
  };

  const toggleLike = (id) => {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const publishPost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      name: currentUser.name,
      avatar: currentUser.image,
      time: "Just now",
      text: newPost,
      image: "",
      likes: 0,
      comments: 0,
      liked: false,
    };

    setPosts((previousPosts) => [post, ...previousPosts]);
    setNewPost("");
  };

  const addComment = (id) => {
    const text = commentText[id]?.trim();
    if (!text) return;

    setComments((previous) => ({
      ...previous,
      [id]: [
        ...(previous[id] || []),
        { name: currentUser.name, text },
      ],
    }));

    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === id
          ? { ...post, comments: post.comments + 1 }
          : post
      )
    );

    setCommentText((previous) => ({ ...previous, [id]: "" }));
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.name.toLowerCase().includes(search.toLowerCase()) ||
      post.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="facebook-app">
      {/* NAVBAR */}
      <header className="topbar">
        <div className="topbar-left">
          <div className="facebook-logo">f</div>
          <div className="search-box">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search Facebook"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <nav className="top-navigation">
          <button className="nav-icon active" aria-label="Home">
            <Home />
          </button>
          <button className="nav-icon" aria-label="Friends">
            <Users />
          </button>
          <button className="nav-icon" aria-label="Marketplace">
            <Store />
          </button>
          <button className="nav-icon" aria-label="Gaming">
            <Gamepad2 />
          </button>
        </nav>

        <div className="topbar-right">
          <button className="round-icon" aria-label="Menu">
            <Menu />
          </button>
          <button className="round-icon notification" aria-label="Messages">
            <MessageCircle />
          </button>
          <button className="round-icon notification" aria-label="Notifications">
            <Bell />
          </button>
          <div className="profile-small">
            <img src={currentUser.image} alt="Your profile" />
            <ChevronDown size={14} />
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="main-layout">
        {/* LEFT SIDEBAR */}
        <aside className="left-sidebar">
          <div className="sidebar-user">
            <img src={currentUser.image} alt="" />
            <span>{currentUser.name}</span>
          </div>

          <div className="sidebar-item">
            <Users className="blue-icon" />
            <span>Friends</span>
          </div>
          <div className="sidebar-item">
            <Clock className="blue-icon" />
            <span>Memories</span>
          </div>
          <div className="sidebar-item">
            <Bookmark className="purple-icon" />
            <span>Saved</span>
          </div>
          <div className="sidebar-item">
            <Users className="purple-icon" />
            <span>Groups</span>
          </div>
          <div className="sidebar-item">
            <Video className="red-icon" />
            <span>Video</span>
          </div>
          <div className="sidebar-item">
            <Store className="blue-icon" />
            <span>Marketplace</span>
          </div>
          <div className="sidebar-item">
            <CalendarDays className="red-icon" />
            <span>Events</span>
          </div>
          <div className="sidebar-item">
            <ChevronDown />
            <span>See more</span>
          </div>

          <div className="sidebar-divider" />
          <p className="sidebar-heading">Your shortcuts</p>
          <div className="sidebar-item">
            <div className="shortcut-icon">🎮</div>
            <span>Gaming community</span>
          </div>
          <div className="sidebar-item">
            <div className="shortcut-icon">💻</div>
            <span>Web Developers</span>
          </div>
        </aside>

        {/* CENTER FEED */}
        <section className="feed">
          {/* STORIES */}
          <div className="stories-section">
            <div className="section-heading">
              <h3>Stories</h3>
              <button>See all</button>
            </div>

            <div className="stories-list">
              {stories.map((story, index) => (
                <div className="story-card" key={story.name}>
                  <img src={story.image} alt={story.name} />
                  {story.create && <span className="story-plus">+</span>}
                  {!story.create && (
                    <span className="story-ring">
                      <img src={story.image} alt="" />
                    </span>
                  )}
                  <span className={story.create ? "story-create-name" : "story-name"}>
                    {story.create ? "Create story" : story.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CREATE POST */}
          <div className="create-post card">
            <div className="create-post-top">
              <img src={currentUser.image} alt="" />
              <input
                type="text"
                placeholder="What's on your mind, Habeeb?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && publishPost()}
              />
            </div>

            <div className="post-divider" />

            <div className="create-post-actions">
              <button>
                <Video className="live-icon" />
                <span>Live video</span>
              </button>
              <button onClick={() => document.getElementById("post-input").focus()}>
                <Image className="photo-icon" />
                <span>Photo/video</span>
              </button>
              <button>
                <Smile className="feeling-icon" />
                <span>Feeling/activity</span>
              </button>
            </div>

            <textarea
              id="post-input"
              className="post-extra-input"
              placeholder="Write something to share..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />

            {newPost.trim() && (
              <button className="publish-button" onClick={publishPost}>
                Publish post
              </button>
            )}
          </div>

          {/* POSTS */}
          <div className="posts-list">
            {filteredPosts.map((post) => (
              <article className="post-card card" key={post.id}>
                <div className="post-header">
                  <div className="post-user">
                    <img src={post.avatar} alt={post.name} />
                    <div>
                      <h4>{post.name}</h4>
                      <p>{post.time} · 🌎</p>
                    </div>
                  </div>
                  <button className="post-more" aria-label="More options">
                    <MoreHorizontal />
                  </button>
                </div>

                <p className="post-text">{post.text}</p>

                {post.image && (
                  <img className="post-image" src={post.image} alt="Post" />
                )}

                <div className="post-statistics">
                  <span>👍 ❤️ {post.likes}</span>
                  <span>{post.comments} comments · 5 shares</span>
                </div>

                <div className="post-divider" />

                <div className="post-actions">
                  <button
                    className={post.liked ? "liked" : ""}
                    onClick={() => toggleLike(post.id)}
                  >
                    <ThumbsUp />
                    <span>{post.liked ? "Liked" : "Like"}</span>
                  </button>
                  <button
                    onClick={() =>
                      setOpenComments((previous) => ({
                        ...previous,
                        [post.id]: !previous[post.id],
                      }))
                    }
                  >
                    <MessageCircle />
                    <span>Comment</span>
                  </button>
                  <button>
                    <Share2 />
                    <span>Share</span>
                  </button>
                </div>

                {openComments[post.id] && (
                  <div className="comments-area">
                    {(comments[post.id] || []).map((comment, index) => (
                      <div className="comment-item" key={index}>
                        <strong>{comment.name}</strong>
                        <p>{comment.text}</p>
                      </div>
                    ))}

                    <div className="comment-input">
                      <img src={currentUser.image} alt="" />
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        value={commentText[post.id] || ""}
                        onChange={(e) =>
                          setCommentText((previous) => ({
                            ...previous,
                            [post.id]: e.target.value,
                          }))
                        }
                        onKeyDown={(e) =>
                          e.key === "Enter" && addComment(post.id)
                        }
                      />
                      <button onClick={() => addComment(post.id)} aria-label="Send comment">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </article>
            ))}

            {filteredPosts.length === 0 && (
              <div className="empty-results card">
                <Search size={28} />
                <h3>No posts found</h3>
                <p>Try searching for another name or keyword.</p>
              </div>
            )}
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="right-sidebar">
          <div className="contacts-heading">
            <h3>Contacts</h3>
            <div>
              <button aria-label="Search contacts"><Search /></button>
              <button aria-label="More contacts"><MoreHorizontal /></button>
            </div>
          </div>

          {friends.map((friend) => (
            <div className="contact-item" key={friend.name}>
              <div className="contact-avatar">
                <img src={friend.image} alt="" />
                <span className="online-dot" />
              </div>
              <span>{friend.name}</span>
            </div>
          ))}

          <div className="sidebar-divider" />
          <h3 className="sponsored-heading">Sponsored</h3>
          <div className="sponsored-card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
              alt="Workspace"
            />
            <div>
              <strong>Learn something new</strong>
              <p>Explore new skills and opportunities.</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
