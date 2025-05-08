import React from "react";
import '../styles/tech_feilds.css';
import { SiJavascript, SiHtml5, SiCss3, SiDart, SiFlutter, SiNodedotjs, SiPhp, SiPython, SiGraphql, SiMongodb, SiMysql, SiPostgresql, SiReact } from "react-icons/si";

export default function Technical_experties() {
    return (
        <div className="tech_main text-center">
            <h1
                className="pt-5"
                style={{
                    background: "linear-gradient(rgb(125, 68, 181), rgb(67, 69, 199))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                Technical Experties
            </h1>
            <h5 style={{
                color: "rgb(74, 85, 104)",
            }}
            >
                A comprehensive toolkit of modern technologies that I use to build robust and scalable solutions.
            </h5>
            <div className="dev_main align-items-center justify-content-center text-white">
                {/* Frontend Development */}
                <div className="frontend">
                    <div className="text1">
                        <h3>Frontend Development</h3>
                        <p>Creating responsive and intuitive user interfaces with modern frameworks and libraries.</p>
                    </div>
                    <div className="lang">
                        <div className="language1 react">
                            <div className="common">
                                <SiReact className="icon" color="#61DBFB" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>React</p>
                        </div>
                        <div className="language1 js">
                            <div className="common">
                                <SiJavascript className="icon" color="#f0db4f" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>JavaScript</p>
                        </div>
                        <div className="language1 html">
                            <div className="common">
                                <SiHtml5 className="icon" color="#e34c26" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>HTML</p>
                        </div>
                        <div className="language1 css">
                            <div className="common">
                                <SiCss3 className="icon" color="#264de4" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>CSS</p>
                        </div>
                        <div className="language1 dart">
                            <div className="common">
                                <SiDart className="icon" color="#0175C2" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>Dart</p>
                        </div>
                        <div className="language1 flutter">
                            <div className="common">
                                <SiFlutter className="icon" color="#02569B" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>Flutter</p>
                        </div>
                    </div>
                </div>

                {/* Backend Development */}
                <div className="backend">
                    <div className="text2">
                        <h3>Backend Development</h3>
                        <p>Building scalable and robust server-side applications and APIs.</p>
                    </div>
                    <div className="lang">
                        <div className="language1 node">
                            <div className="common">
                                <SiNodedotjs className="icon" color="#68A063" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>Node.js</p>
                        </div>
                        <div className="language1 php">
                            <div className="common">
                                <SiPhp className="icon" color="#777BB4" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>PHP</p>
                        </div>
                        <div className="language1 python">
                            <div className="common">
                                <SiPython className="icon" color="#3776AB" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>Python</p>
                        </div>
                        <div className="language1 graphql">
                            <div className="common">
                                <SiGraphql className="icon" color="#E10098" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>GraphQL</p>
                        </div>
                        {/* <div className="language1 restapi">
                            <RiApiLine className="icon" color="#4CAF50" size={40} style={{ padding: "5px" }} />
                            <p>REST API</p>
                        </div> */}
                    </div>
                </div>

                {/* Database Management */}
                <div className="database">
                    <div className="text3">
                        <h3>Database Management</h3>
                        <p>Handling data storage, retrieval, and management using modern database technologies.</p>
                    </div>
                    <div className="lang">
                        <div className="language1 mongo">
                            <div className="common">
                                <SiMongodb className="icon" color="#47A248" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>MongoDB</p>
                        </div>
                        <div className="language1 mysql">
                            <div className="common">
                                <SiMysql className="icon" color="#00758F" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>MySQL</p>
                        </div>
                        <div className="language1 postgre">
                            <div className="common">
                                <SiPostgresql className="icon" color="#336791" size={40} style={{ padding: "5px" }} />
                            </div>
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}