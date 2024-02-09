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
        "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/426830869_3556458098001895_7717570636432169091_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=c42490&_nc_ohc=i6yFkHgCd_IAX9Y7WOf&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfBpa1m_xLH3grJGAcqO_fqYz8ij4C-bs30S-ttq1jzpBA&oe=65CA7345",
      webUrl: "https://shop-7l9b.vercel.app/",
    },
    {
      title: "Movie Website",
      description: "MERN",
      imgUrl: "Screenshot (13).png",
      webUrl:
        "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/426920244_3556454141335624_7413064502428512203_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=c42490&_nc_ohc=2nCupL2vaEIAX9EAVIL&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfA88xyiOBXbkObzA4iX9mNuQ2W_XatFJerMCMdsrDmlew&oe=65CBD4E0",
    },
    {
      title: "Porfolio Website",
      description: "Nextjs",
      imgUrl:
        "https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/426870817_3556453858002319_2125734321908941033_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=c42490&_nc_ohc=vtnWCdqbhFMAX_zrs1f&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfC0gxsfQ5HmXJ-iKO13mg8I6h2Rl_0HtgQLTvrlBG9z8Q&oe=65CB9117",
      webUrl: "https://portfolio-lteg.vercel.app/",
    },
    {
      title: "Hoobank",
      description: "React",
      imgUrl:
        "https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/426600846_3556453831335655_5378008001873478697_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=c42490&_nc_ohc=-uj5p2qHyNcAX_6Kv4o&_nc_oc=AQlO7tQ4AVS_nZq2DB-_3RgqXf6FZdY7SN5tO4kar_n2a6z2ABT1mkJdNrOA0MvOalE&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfBPFCNts94Uq-lgDL5Cvo8wL3YZrQGZaHnW32Pan9skcQ&oe=65CB7C03",
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
