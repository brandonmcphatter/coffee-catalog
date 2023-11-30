import './App.css';

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

            <footer className="footer">
                <p>Created by Brandon</p>
            </footer>
        </div>
    );
}

function Header() {
    return (
        <header className='App-header'>
            <h1>Coffee Catalog</h1>
        </header>
    );
}

function Main({children}) {
    return (
        <main className="main">
            {children}
        </main>
    );
}

function CoffeeDisplay({coffeeData, children}) {
    return (
        <div className='coffee-display'>
            {children}
            {coffeeData.map((coffee) =>
                <Coffee id={coffee.id}
                        name={coffee.name}
                        roast={coffee.roast}/>)
            }
        </div>
    );
}

function CoffeeEditor() {
    return (
        <div className='coffee-editor'>
            <CoffeeSearcher/>
            <CoffeeAdder/>
        </div>
    )
}

function Coffee({id, name, roast}) {
    return (
        <div className='coffee'>
                <h4 className='name'>{name}</h4>
                <p className='roast'>{roast}</p>
        </div>
    )
}

function CoffeeSearcher() {
    return (
        <div className='coffee-input'>
            <form className='filter'>
                <div className='flex'>
                    <label htmlFor="roast-selection">Roast</label>
                    <select id="roast-selection" className="custom-select py-1">
                        <option id="all">All</option>
                        <option id="light">Light</option>
                        <option id="medium">Medium</option>
                        <option id="dark">Dark</option>
                    </select>
                    <div className='flex'>
                        <label>Coffee Name</label>
                        <input id="coffeeDisplay" type="text" name="coffee name" placeholder="Start typing..."/>
                    </div>
                </div>
                <div>
                    <input id="submit" type="submit"/>
                </div>
            </form>
        </div>
    )
}

function CoffeeAdder(){

}

export default App;
