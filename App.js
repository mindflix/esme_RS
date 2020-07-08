/*
function App() {
    return (
	    <div className="App">
            <Nav />
            <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/projects" component={ Projects }/>
            <Route path="/partners" component={ Partners }/>
            <Route path="/login" component={ Login }/>
            </Switch>
	    </div>
    );
}
*/

class Nav extends React.Component {
    render() {
        return (
		<div className="flex flex-wrap flex-col sm:flex-row px-2 sm:px-20 py-2 items-center justify-between bg-white border border-gray-200 shadow-md">
                <Logo />
		<Links />
		</div>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
		<div className="flex px-10">
                <a href="/">
		<span className="logo-name font-bold text-indigo-500 antialiased text-3xl">Sudrihack</span>
		</a>
		</div>
        );
    }
}

class Links extends React.Component {
    render() {
        return(
            <nav className="flex items-center space-x-10">
                <ul className="flex flex-wrap justify-between text-gray-400 nav-links font-bold text-xl space-x-2 sm:space-x-8 ">
                    <li className="hover:text-indigo-500"><a href="/">Accueil</a></li>
                    <li className="hover:text-indigo-500"><a href="/">Projets</a></li>
                    <li className="hover:text-indigo-500"><a href="/">Partenaires</a></li>
                </ul>
                <Signbutton />
            </nav>
        );
    }
}

class Signbutton extends React.Component {
    render() {
        return (
            <div className="inline-flex">
                <button className="bg-indigo-400 hover:bg-indigo-500 text-white py-2 px-2 rounded-l">
                    <a href="">Se connecter</a>
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-2 rounded-r">
                    <a href="">S'inscrire</a>
                </button>
            </div>
        );
    }
}

class Login extends React.Component {
    render() {
        return (
            <section className="w-full">
                <div className="flex justify-center py-20">
                <div className=" container max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="username">
                            Nom d'utilisateur
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom d'utilisateur" />
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
                            Mot de passe
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Entrer votre mot de passe.</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Connection
                        </button>
                        <a className="inline-block px-2 align-baseline font-thin text-sm text-indigo-400 hover:text-indigo-700" href="http://sudrihack.com">
                            Mot de passe oublié ?
                        </a>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Sudrihack Corp. Tous droits réservés.
                    </p>
                </div>
                </div>
            </section>
        );
    }
}
const e = (
	<div className="App">
        <Nav />
	<Login />
	</div>
);

const domContainer = document.querySelector('#root');
ReactDOM.render(e, domContainer);
