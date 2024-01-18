import { useState } from "react";

// import { FaUser } from "react-icons/fa";
useState;

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [signInShow, setsignInShow] = useState(false);

  function handleSubmit() {
    alert("bonjour");
  }

  return (
    <div className="loginPage">
      <div className="top">
        <div className="leftLine"></div>
        <div className="logo">
          {" "}
          <img src="/images/login.png" alt="logo login" />
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
          <div className="passwordArea">
            <input
              type={passwordShow ? "text" : "password"}
              name="password"
              placeholder="🔒Mot de passe"
            />

            <img
              onClick={() => setPasswordShow(!passwordShow)}
              src={
                passwordShow
                  ? "/images/Mdp_unsee_black.png"
                  : "/images/Mdp_see_black.png"
              }
              alt="password visible"
            />
          </div>
          <button type="submit">Connexion</button>
        </form>
      </div>

      <div className="registerArea">
        <div className="registerText">
          Je n'ai pas de compte,{" "}
          <span className="register" onClick={() => setsignInShow(!signInShow)}>
            S'inscrire
          </span>{" "}
        </div>
        {signInShow && (
          <form
            action="
        "
            onSubmit={handleSubmit}
          >
            <input type="text" placeholder="👤Identifiant" />
            <input
              type="password"
              name="password"
              placeholder="🔒Mot de passe"
            />
            <input
              type="password"
              name="passwordCheck"
              placeholder="🔒 Confirmation Mot de passe"
            />
            <input type="email" name="email" placeholder="✉️ E-mail" />
            <input type="text" name="adresse" placeholder="🏠 Adresse" />
            <button type="submit">Créer mon compte</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
