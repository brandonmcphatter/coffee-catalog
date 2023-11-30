import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const coffeeData = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


function App() {
    return (
        <div className="App">
            <Header/>

            <Main>
                <CoffeeDisplay coffeeData={coffeeData}/>
                <CoffeeEditor/>
            </Main>

            <Footer/>
        </div>
    );
}

function Header() {
    return (
        <header className='text-center bg-warning py-1 mb-3'>
            <h1>Coffee Catalog</h1>
            <p>The Perfect Way to Start Your Day!</p>
        </header>
    );
}


function Main({children}) {
    return (
        <main className="main container d-flex">
            {children}
        </main>
    );
}

function CoffeeDisplay({coffeeData, children}) {
    return (
        <div className='d-flex flex-wrap align-content-start'>
            {children}
            {coffeeData.map((coffee) =>
                <Coffee key={coffee.id}
                        id={coffee.id}
                        name={coffee.name}
                        roast={coffee.roast}/>)
            }
        </div>
    );
}

function CoffeeEditor() {
    return (
        <div className=''>
            <CoffeeSearcher/>
            <CoffeeAdder/>
        </div>
    )
}

function Coffee({id, name, roast}) {
    return (
        <div className='d-flex flex-wrap my-2 w-50'>
            <h4 className='text-wrap mb-0'>{name}</h4>
            <p className='ms-1 mt-1 text-danger'>{roast}</p>
        </div>
    )
}

function CoffeeSearcher() {
    return (
        <section className="container d-flex flex-column">
            <form>
                <div className="container d-flex flex-column">
                    <label htmlFor="roast-selection" className="fw-bold mb-1">Roast</label>
                    <select id="roast-selection" className="custom-select py-1">
                        <option id="all">All</option>
                        <option id="light">Light</option>
                        <option id="medium">Medium</option>
                        <option id="dark">Dark</option>
                    </select>
                    <label className="mt-2 fw-bold mb-1">Coffee Name</label>
                    <input id="coffeeDisplay" type="text" name="coffee name" placeholder="Start typing..."/>
                </div>
                <div className="container mt-3">
                    <input className="btn-primary w-100" id="submit" type="submit"/>
                </div>
            </form>
            <hr/>
        </section>
    )
}

function CoffeeAdder() {
    return (
        <section className="container d-flex flex-column ">
            <h2 className="text-center add-a-coffee">Add a Coffee <i className="fa-solid fa-mug-saucer"></i></h2>
            <form className="add-new-coffee">
                <div className="container d-flex flex-column">
                    <label htmlFor="roast-selection" className="fw-bold mb-1">Roast</label>
                    <select id="roast-selection-2" className="custom-select py-1">
                        <option>Light</option>
                        <option>Medium</option>
                        <option>Dark</option>
                    </select>
                    <label className="mt-2 fw-bold mb-1">Name</label>
                    <input className="new-coffee-added" type="text" name="name" placeholder="Place your order..."/>
                </div>
                <div className="container mt-3">
                    <input className="btn-primary w-100" id="add-coffee" type="submit"/>
                </div>
            </form>
        </section>
    )
}

function Footer() {
    return (
        <footer className="footer d-flex flex-column align-items-center p-3 text-center bg-warning  mt-2">
            <p>Created by Brandon</p>
        </footer>
    )
}

export default App;
