// import { FaUser } from "react-icons/fa";

const Login = () => {
  function handleSubmit() {
    alert("bonjour");
  }

  return (
    <div className="loginPage">
      <div className="top">
        <div className="leftLine"></div>
        <div className="logo">
          {" "}
          <img src="public/images/login.png" alt="logo login" />
        </div>
        <div className="rightLine"></div>
      </div>
      <div className="loginArea">
        <div className="title">Login</div>
        <form
          action="
        "
        >
          <input type="text" placeholder="👤Identifiant" />
          <input type="password" name="password" placeholder="🔒Mot de passe" />
          <button type="submit">Connexion</button>
        </form>
      </div>

      <div className="registerArea">
        <div className="registerText">Je n'ai pas de compte, s'inscrire : </div>
        <form
          action="
        "
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="👤Identifiant" />
          <input type="password" name="password" placeholder="🔒Mot de passe" />
          <input
            type="password"
            name="password"
            placeholder="🔒 Confirmation Mot de passe"
          />
          <input type="email" name="email" placeholder="✉️ E-mail" />
          <input type="text" name="adresse" placeholder="🏠 Adresse" />
          <button type="submit">Créer mon compte</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
