import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from "react";


function App() {
    const [coffeeList, setCoffeeList] = useState([
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
    ]);
    const [roastSelection, setRoastSelection] = useState('all');
    const [query, setQuery] = useState('');
    const [newCoffee, setNewCoffee] = useState({
        id: coffeeList.length + 1,
        name: 'Test Coffee',
        roast: 'Dark'
    });

    return (
        <div className="App">
            <Header/>

            <Main>
                <CoffeeDisplay coffeeList={coffeeList}
                               setCoffees={setCoffeeList}
                               roastSelection={roastSelection}
                               query={query}
                />
                <CoffeeEditor>
                    <CoffeeSearcher roastSelection={roastSelection}
                                    setRoast={setRoastSelection}
                                    coffeeList={coffeeList}
                                    setCoffees={setCoffeeList}
                                    query={query}
                                    setQuery={setQuery}
                    />
                    <CoffeeAdder newCoffee={newCoffee}
                                 setNewCoffee={setNewCoffee}
                                 coffeeList={coffeeList}
                                 setCoffees={setCoffeeList}
                    />
                </CoffeeEditor>
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

function CoffeeDisplay({coffeeList, roastSelection, query, setCoffees, children}) {

    return (
        <div className='d-flex flex-wrap align-content-start'>
            {children}


            {roastSelection === 'all'
                ? coffeeList.map((coffee) =>
                    <Coffee key={coffee.id}
                            id={coffee.id}
                            name={coffee.name}
                            roast={coffee.roast}/>)
                : coffeeList.filter((coffee) => coffee.roast === roastSelection)
                    .map((coffee) =>
                        <Coffee key={coffee.id}
                                id={coffee.id}
                                name={coffee.name}
                                roast={coffee.roast}/>
                    )
            }

        </div>
    )
}

function Coffee({name, roast}) {
    return (
        <div className='d-flex flex-wrap my-2 w-50'>
            <h4 className='text-wrap mb-0'>{name}</h4>
            <p className='ms-1 mt-1 text-danger'>{roast}</p>
        </div>
    )
}

function CoffeeEditor({
                          children
                      }) {
    return (
        <div className=''>
            {children}
        </div>
    )
}


function CoffeeSearcher({
                            roastSelection, setRoast, query, setQuery, handleCoffeeSearch
                        }) {


    return (
        <section className="container d-flex flex-column">
            <form>
                <div className="container d-flex flex-column">
                    <label htmlFor="roast-selection" className="fw-bold mb-1">Roast</label>
                    <select id="roast-selection"
                            className="custom-select py-1"
                            value={roastSelection}
                            onChange={(event) => setRoast(event.target.value)}
                    >
                        <option value='all' id="all">all</option>
                        <option value='light' id="light">light</option>
                        <option value='medium' id="medium">medium</option>
                        <option value='dark' id="dark">dark</option>
                    </select>
                    <label className="mt-2 fw-bold mb-1">Coffee Name</label>
                    <input id="coffeeDisplay" type="text" name="coffee name" value={query}
                           onChange={e => setQuery(e.target.value)} placeholder="Start typing..."/>
                </div>
                <div className="container mt-3">
                    <input className="btn-primary w-100" id="submit" type="submit" onSubmit={handleCoffeeSearch}/>
                </div>
            </form>
            <hr/>
        </section>
    )
}

function CoffeeAdder({newCoffee, setNewCoffee, setCoffees, coffeeList}) {

    function handleAddCoffee() {

        setCoffees([...coffeeList, newCoffee]);

        console.log(coffeeList)
    }

    return (
        <section className="container d-flex flex-column ">
            <h2 className="text-center add-a-coffee">Add a Coffee <i className="fa-solid fa-mug-saucer"></i></h2>
            <form className="add-new-coffee" onSubmit={() => handleAddCoffee}>
                <div className="container d-flex flex-column">
                    <label htmlFor="roast-selection" className="fw-bold mb-1">Roast</label>
                    <select id="roast-selection-2"
                            value={newCoffee.roast}
                            className="custom-select py-1"
                            onChange={(event) =>
                                setNewCoffee(
                                    {...newCoffee, roast: event.target.value})}>
                        < option>light< /option>
                        <option>medium</option>
                        <option>dark</option>
                    </select>
                    <label className="mt-2 fw-bold mb-1">Name</label>
                    <input className="new-coffee-added" type="text" name="name" value={newCoffee.name}
                           onChange={(event) =>
                               setNewCoffee(
                                   {...newCoffee, name: event.target.value})}
                           placeholder="Name your coffee..."/>
                </div>
                <div className="container mt-3">
                    <input className="btn-primary w-100" id="add-coffee" type="submit" onSubmit={handleAddCoffee}/>
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
