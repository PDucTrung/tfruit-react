import React from "react";
import "./BlogPost.css";

const BlogPost = () => {
  return (
    <div className="container">
      <div className="row gap-5 gap-lg-0">
        <div className="blog-post-left d-flex flex-column gap-3 col-12 col-lg-8">
          <div className="fs-24">
            <p>All About Pudding - Pudding is always very good</p>
          </div>
          <div className="d-flex gap-4">
            <div>
              <p>
                <span className="text-gray-fo">BY </span>
                <span className="text-green">KATE WILLIAMS</span>
              </p>
            </div>
            <div className="d-flex gap-2">
              <div>
                <i className="bi bi-clock" />
              </div>
              <div>
                <p>NOV 30, 2018</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <div>
                <i className="bi bi-chat-dots" />
              </div>
              <div>
                <p>14</p>
              </div>
            </div>
          </div>
          <p>
            Pudding is a traditional English dish, which is prepared according
            to the principle "what’s in the oven, then on the table swords." It
            is made from anything: from meat to chocolate. The Briton will call
            almost any jelly-like dish pudding.
          </p>
          <div className="img-thumbnail-blog-post">
            <img src="./assets/img/img-blog-post-1.jpg" alt="dsd" />
          </div>
          <div className="d-flex gap-2 justify-content-center align-content-center">
            <div>
              <i className="i-quote bi bi-quote" />
            </div>
            <div>
              <p className="fs-20 fw-500">
                Mention of pudding is very often found in English literature.
                Agatha Christie called her Adventure of Christmas Pudding series
                of stories.
              </p>
            </div>
          </div>
          <p>
            Pudding is a traditional English dish, which is prepared according
            to the principle "what’s in the oven, then on the table swords." It
            is made from anything: from meat to chocolate. The Briton will call
            almost any jelly-like dish pudding.
          </p>
          <p>
            In Russia, they learned about pudding relatively recently. In our
            opinion, this is, first of all, an appetizing dessert, similar to
            jelly and yogurt at the same time. We are used to buying it
            ready-made or to make it from special mixtures.
          </p>
          <p>
            However, initially it was far from a sweet and not so delicious
            dish. According to one version, the pudding was made from oatmeal on
            meat broth. Immediately after cooking, prunes, honey, nuts, bread
            crumbs were added to it, and served literally from the heat, from
            the heat.
          </p>
          <p>
            Most likely, there were two types of “prapudding,” but over time,
            the British preferred a sweeter version. The composition of this
            peculiar dish gradually changed, and over time, the pudding became a
            dish of flour, fat, sugar and fruit. By tradition, it is cooked in a
            steam bath, and then left to infuse for a while (depending on the
            recipe - from several hours to several days).
          </p>
          <div className="d-flex justify-content-between align-content-center">
            <div>
              <span className="text-gray-fo">NEWS, ORGANIC FOOD, TIPS</span>
            </div>
            <div className="d-flex justify-content-center align-content-center gap-3">
              <div>Share:</div>
              <div className="d-flex gap-3 align-content-center">
                <i className="bi bi-facebook" />
                <i className="bi bi-twitter" />
                <i className="bi bi-google" />
                <i className="bi bi-instagram" />
              </div>
            </div>
          </div>
          <div className="spacer" />
          {/* cmt blog post */}
          <div className="cmt-blog-post d-flex flex-column gap-5">
            <div className="cmt-blog-user">
              <div className="title-cmt-blog fs-24 fw-400">2 Comment</div>
              <div className="box-cmt-blog d-flex gap-3">
                <div className="img-thumbnail-cmt-blog">
                  <img src="./assets/img/user-cmt-1.jpg" alt="dsd" />
                </div>
                <div className="content-cmt-blog-user d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <div className="text-gray-fo">John Doe</div>
                      <div className="line-3">-</div>
                      <div className="text-green cursor-pointer">REPLY</div>
                    </div>
                    <div className="text-gray-fo">NOV 30, 2020</div>
                  </div>
                  <div>
                    The Tfruit farmers are wonderful to deal with, and the
                    produce is amazing. It’s nice to know you can get organic,
                    non-GMO food locally. The selections each week are super
                    fresh and delicious, I have had a wonderful experience!
                  </div>
                </div>
              </div>
              <div className="box-cmt-blog d-flex gap-3">
                <div className="img-thumbnail-cmt-blog">
                  <img src="./assets/img/user-cmt-2.jpg" alt="dsd" />
                </div>
                <div className="content-cmt-blog-user d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <div className="text-gray-fo">Nick Stevens</div>
                      <div className="line-3">-</div>
                      <div className="text-green cursor-pointer">REPLY</div>
                    </div>
                    <div className="text-gray-fo">July 30, 2019</div>
                  </div>
                  <div>
                    The Tfruit farmers are wonderful to deal with, and the
                    produce is amazing. It’s nice to know you can get organic,
                    non-GMO food locally. The selections each week are super
                    fresh and delicious, I have had a wonderful experience!
                  </div>
                </div>
              </div>
            </div>
            <div className="cmt-form-blog">
              <div className="add-cmt">
                <div className="title-add-cmt fs-20 fw-400">
                  <p className="fs-24">Add your comment</p>
                </div>
                <div className="content-add-cmt">
                  <form action="" method="POST" className="form" id="form-5">
                    <div className="name-customer d-flex gap-3">
                      {/* full name */}
                      <div className="form-group">
                        <label
                          htmlFor="fullname"
                          className="form-label font-poppins"
                        >
                          Name
                        </label>
                        <input
                          id="fullname"
                          name="fullname"
                          type="text"
                          placeholder="Ex: Pham"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="Ex: email@domain.com"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cmt" className="form-label">
                        Comment
                      </label>
                      <textarea
                        name="cmt"
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Your comment ..."
                        defaultValue={""}
                      />
                      <span className="form-message" />
                    </div>
                    <div>
                      <button className="btn-submit">SUBMIT</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post-right d-flex flex-column gap-5 col-12 col-lg-4">
          {/* search */}
          <div className="pr-search">
            <input
              className="search-box-pr"
              type="search"
              name="search-pr"
              id=""
              placeholder="Search the blog ... "
            />
          </div>
          {/* Recent posts */}
          <div className="recent-posts d-flex flex-column gap-4 align-content-start">
            <div className="fs-24 fw-400">Recent posts</div>
            <div className="d-flex justify-content-start align-items-center gap-3">
              <div className="img-recent-post">
                <img src="./assets/img/blog-post-1.jpg" alt="dsd" />
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="fs-16 fw-500">
                  Health Benefits of a Raw Food
                </div>
                <div className="fs-16">15 jul 2020</div>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center gap-3">
              <div className="img-recent-post">
                <img src="./assets/img/blog-post-2.jpg" alt="dsd" />
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="fs-16 fw-500">All About Pudding</div>
                <div className="fs-16">15 jul 2020</div>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center gap-3">
              <div className="img-recent-post">
                <img src="./assets/img/blog-post-4.jpg" alt="dsd" />
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="fs-16 fw-500">Start your organic journey</div>
                <div className="fs-16">15 jul 2020</div>
              </div>
            </div>
          </div>
          {/* Categories */}
          <div className="categories-blog d-flex flex-column gap-4">
            <div className="fs-24 fw-400">Categories</div>
            <div className="d-flex gap-2 align-items-center">
              <div>
                <i className="bi bi-bookmarks-fill" />
              </div>
              <div>
                <span>article(10)</span>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div>
                <i className="bi bi-bookmarks-fill" />
              </div>
              <div>
                <span>adventure(3)</span>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div>
                <i className="bi bi-bookmarks-fill" />
              </div>
              <div>
                <span>food(9)</span>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div>
                <i className="bi bi-bookmarks-fill" />
              </div>
              <div>
                <span>news(27)</span>
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className="tags-blog d-flex flex-column gap-4">
            <div className="fs-24 fw-400">Tags</div>
            <div className="d-flex gap-2 flex-wrap">
              <div>
                <span className="text-orange-fo"># </span>article
              </div>
              <div>
                <span className="text-orange-fo"># </span>food
              </div>
              <div>
                <span className="text-orange-fo"># </span>health
              </div>
              <div>
                <span className="text-orange-fo"># </span>fruit
              </div>
              <div>
                <span className="text-orange-fo"># </span>vegetable
              </div>
              <div>
                <span className="text-orange-fo"># </span>fresh
              </div>
              <div>
                <span className="text-orange-fo"># </span>juice
              </div>
              <div>
                <span className="text-orange-fo"># </span>store
              </div>
            </div>
          </div>
          {/* Instagram */}
          <div className="instagram d-flex flex-column gap-4">
            <div className="fs-24 fw-400">Instagram</div>
            <div className="d-flex align-content-center justify-content-start gap-3 flex-wrap">
              <div className="img-thumbnail-instagram">
                <img src="./assets/img/blog-1.jpg" alt="ssd" />
              </div>
              <div className="img-thumbnail-instagram">
                <img src="./assets/img/blog-2.jpg" alt="ssd" />
              </div>
              <div className="img-thumbnail-instagram">
                <img src="./assets/img/blog-3.jpg" alt="ssd" />
              </div>
              <div className="img-thumbnail-instagram">
                <img src="./assets/img/blog-4.jpg" alt="ssd" />
              </div>
              <div className="img-thumbnail-instagram">
                <img src="./assets/img/blog-5.jpg" alt="ssd" />
              </div>
              <div className="img-thumbnail-instagram">
                <img src="./assets/img/blog-6.jpg" alt="ssd" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
