import { DefaultPageBanner, ImagePageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const BlogPost = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Code</a> / 26 June 2023</span>",
  ];
  return (
    <Layout>
      <DefaultPageBanner
        pageName={"Automating Data Transformation: A Counterclockwise Square Algorithm"}
        typingData={typingAnimation}
      />

      <div className="section blog">
        <div className="content">

          <div className="post">
            <div className="content-box">

              <div className="single-post-text">
                   <h2>Introduction</h2>
                   <p>In the world of data analysis and automation, there are often scenarios where manual processing
                     can be time-consuming and prone to errors. Recently, I had an interesting encounter at my office 
                     where a colleague approached me seeking assistance with a data manipulation task in Excel. This encounter 
                     led me to develop a Python algorithm to automate the process and provide a more efficient solution. In this 
                     blog post, I&aposll share the story of how I helped my colleague and the algorithm I created to solve the problem.</p>
                   <h2>The Challenge</h2>
                   <p>My colleague had a table of size mxn in Excel and needed to extract data from it in a specific pattern. 
                    He wanted to collect every 2x2 square in a counterclockwise manner and store the values in a single column. 
                    Additionally, he wanted to label each entry with an index, starting from &quota0&quot and then incrementing. 
                    The manual approach would have been time-consuming and error-prone, so I decided to develop an algorithm to automate this process.</p>
                   <h2>The Algorithm</h2>
                   <p>To solve this challenge, I leveraged the power of Python and the pandas library. The algorithm consists of the following steps:</p>
                   <ol>
                    <li>Reading the data from an Excel file using the read_excel_data function.</li>
                    <li>Defining the initial position and variables.</li>
                    <li>Iterating through the table in a counterclockwise direction, storing the values in a result 
                    array and corresponding indices in an index array.
                    </li>
                    <li>Exporting the result to a new Excel file using pandas.</li>
                   </ol>
                   <p>I implemented the algorithm and tested it with a sample table provided by my colleague, which I will show in a screenshot below.</p>
                    <SyntaxHighlighter language="python" style={oneDark} showLineNumbers={true}>
                        {`import pandas as pd

                        def read_excel_data(filename):
                            df = pd.read_excel(filename)
                            data = df.values.tolist()
                            return data

                        def counter_clockwise_movement(matrix):
                            m = len(matrix)
                            n = len(matrix[0])
                            row = 1
                            col = 1
                            wIndex = 0
                            cond = True
                            result = []
                            index = []

                            while(cond):
                                result.append(matrix[row][col])
                                index.append(wIndex)

                                if wIndex == 0:
                                    wIndex = 1
                                    row -= 1
                                elif wIndex == 1:
                                    wIndex = 2
                                    col -= 1
                                elif wIndex == 2:
                                    wIndex = 3
                                    row += 1
                                elif col < n-2:
                                    wIndex = 0
                                    col += 3
                                elif row < m-1:
                                    wIndex = 0
                                    row += 2
                                    col -= 3
                                else:
                                    cond = False

                            return result, index

                        filename = "data.xlsx"
                        data = read_excel_data(filename)
                        [result, index] = counter_clockwise_movement(data)

                        print("Data:")
                        for row in data:
                            print(row)

                        print("Counter-clockwise movement:")
                        print(result)

                        index_vector = [f"W{index[i]}" for i in range(len(index))]

                        result_df = pd.DataFrame(result, columns=["Result"], index=index_vector)
                        result_df.to_excel("result.xlsx")`}
                    </SyntaxHighlighter>
                   <h2>The Result</h2>
                   <p>After running the algorithm with the provided table, the output successfully 
                    extracted the desired 2x2 squares in a counterclockwise manner. The resulting 
                    numbers were from 1 to 24, matching the expected outcome.</p>
                   <h2>Conclusion</h2>
                   <p>By developing and implementing this algorithm, I was able to automate a complex 
                    data transformation task that would have been cumbersome to perform manually. This 
                    not only saved time but also ensured accuracy and repeatability. The ability to leverage 
                    programming skills and automation tools like Python opens up new possibilities for data 
                    manipulation and analysis.</p>
                   <p>In future projects, I will continue to explore similar challenges and develop innovative solutions to streamline processes and enhance productivity. If you have encountered similar data manipulation tasks or have any questions about the algorithm, please feel free to reach out. Stay tuned for more exciting projects and stories!</p>
                    <figure className="align-center">
                        <img src="https://simongeronimowebsite.s3.us-east-2.amazonaws.com/counterclockwise-algorithm-data-table.png" alt="missing"/>
                        <figcaption>Data</figcaption>
                    </figure>
                    <figure className="align-center">
                        <img src="https://simongeronimowebsite.s3.us-east-2.amazonaws.com/counterclockwise-algorithm-result-table.png" alt="missing"/>
                        <figcaption>Result</figcaption>
                    </figure>
              
              </div>

              <div className="post-text-bottom">
                <div className="social-share">
                  <span>Share:</span>
                  <a className="share-btn share-btn-facebook share-btn-1" title="Share on Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a className="share-btn share-btn-twitter share-btn-2" title="Share on Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="share-btn share-btn-linkedin share-btn-3" title="Share on Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="cat-links">
                  <span>Posted in </span>
                  <a href="/categories/design">Code</a>
                  <span className="byline"> / by <span className="author">Simon Geronimo Mesber</span></span>
                </div>
                <div className="tags-links">
                  <span>Tags:</span>
                  <a href="/tags/code" rel="tag">code</a>
                </div>
              </div>

            </div>
          </div>
          {/*
          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#" title="Design in Mobile Application"><span className="post-nav-next post-nav-text">Prev</span></a>
              </div>
              <div className="nav-next">
                <a href="#" title="By spite about do of do allow blush"><span className="post-nav-prev post-nav-text">Next</span></a>
              </div>
            </div>
          </nav>
          */}
          <div className="clear"></div>
        </div>
      </div>

    </Layout>
  );
};
export default BlogPost;
