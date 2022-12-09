import { FcCallback, FcHome } from "react-icons/fc";
import { GoMail } from "react-icons/go";

function Home() {
  return (
    <>
      <div>
        <div className="card_left">
          <div className="profil">
            <img
              src="https://zupimages.net/up/22/42/5uiu.jpeg"
              alt="user avatar"
              className="profil_card"
              width={207}
              height={200}
            />
          </div>
          <div className="title_card_left">
            <h2>Jhone Doe</h2>
            <ul className="list">
              <li>
                <GoMail />: malada52@masoko.fr
              </li>

              <li>
                <FcCallback />: 0666666666
              </li>
              <li>
                <FcHome />: 35 avenue du temps, 95241 kindobika
              </li>
            </ul>
          </div>
          <hr className="trace"></hr>

          <h4 className="competence">Expériances Professionnelles</h4>
          <hr className="competence_hr"></hr>
          <div className="paragraph">
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
          </div>
          <h4 className="competence">Parcours Scolaire </h4>
          <hr className="competence_hr"></hr>
          <div className="paragraph">
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
            <p>jfhcgvtjgvnhyfvhyhgjgbyj,hbgj </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
