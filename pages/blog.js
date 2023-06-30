import { DefaultPageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const Blog = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Home</a> / Blog</span>",
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"Blog"} typingData={typingAnimation} />

     <div className="section blog">
        <div className="content">

          <div className="title"><div className="title_inner">Latest Posts</div></div>

          <div className="blog-items">

            <div className="blog-col">
                <div className="blog-item content-box">
                    <div className="post">
                        <div className="image">
                            <Link href="counterclockwise_algorithm"><a className="post-thumbnail">

                                <img src="https://simongeronimowebsite.s3.us-east-2.amazonaws.com/counterclockwise-algorithm-data-table.png" className="wp-post-image" alt="Automating Data Transformation: A Counterclockwise Square Algorithm" />

                                <span className="info">
                                    <span className="centrize full-width">
                                        <span className="vertical-center">
                                            <span className="icon fas fa-plus"></span>
                                        </span>
                                    </span>
                                </span>
                            </a></Link>
                        </div>
                        <div className="desc">
                            <div className="date">
                                26 June 2023
                            </div>
                            <Link href="counterclockwise_algorithm"><a className="name">Automating Data Transformation: A Counterclockwise Square Algorithm</a></Link>
                            <div className="single-post-text">
                                <p>How to automate the process of extracting 2x2 squares from an Excel table in a counterclockwise manner using a simple algorithm.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>

          <div className="content-sidebar">
            <aside id="secondary" className="widget-area">

              {/*<div id="search" className="widget widget_search">
                  <form className="search-form" method="GET">
                      <div className="search-form-label">
                          <input type="search" className="search-field" id="search-input" placeholder="Search ..." value="" />
                          <input type="submit" className="search-submit" value="Search ..." />
                      </div>
                      <ul id="results-container"></ul>
                  </form>
                 </div>
                 */}

              <section className="widget widget_recent_entries">
                  <h2 className="widget-title">Latest Posts</h2>
                  <ul>
                  </ul>
              </section>

              <section className="widget widget_categories">
                  <h2 className="widget-title">Categories</h2>
                  <ul>
                  </ul>
              </section>

              <section className="widget widget_tags">

                  <h2 className="widget-title">Tags</h2>

                  <div className="tags">
                  </div>

              </section>

            </aside>
          </div>



        </div>
      </div>

    </Layout>
  );
};
export default Blog;
