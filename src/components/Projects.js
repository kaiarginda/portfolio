import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "The Road",
      description: "Nextjs",
      imgUrl:
        "https://road-blue.vercel.app/_next/static/media/header-bg.2ed11f7f.jpg",
      webUrl: "https://road-blue.vercel.app/",
    },
    {
      title: "Wine Website",
      description: "Nextjs",
      imgUrl:
        "https://winerestaurant-p9gp.vercel.app/_next/static/media/section-1-bg.64d7356a.jpg",
      webUrl: "https://winerestaurant-p9gp.vercel.app/",
    },
    {
      title: "Shop Website",
      description: "Nextjs",
      imgUrl:
        "https://images.pexels.com/photos/2047909/pexels-photo-2047909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      webUrl: "https://shop-7l9b.vercel.app/",
    },
    {
      title: "Movie Website",
      description: "MERN",
      imgUrl:
        "https://image.tmdb.org/t/p/original/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
      webUrl:
        "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/426920244_3556454141335624_7413064502428512203_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=c42490&_nc_ohc=2nCupL2vaEIAX9EAVIL&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfA88xyiOBXbkObzA4iX9mNuQ2W_XatFJerMCMdsrDmlew&oe=65CBD4E0",
    },
    {
      title: "Porfolio Website",
      description: "Nextjs",
      imgUrl:
        "data:image/jpeg;base64,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",
      webUrl: "https://portfolio-lteg.vercel.app/",
    },
    {
      title: "Hoobank",
      description: "React",
      imgUrl: "https://hoobankk.onrender.com/assets/robot.352cd501.png",
      webUrl: "https://hoobankk.onrender.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are the projects that i have built during my journey!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
