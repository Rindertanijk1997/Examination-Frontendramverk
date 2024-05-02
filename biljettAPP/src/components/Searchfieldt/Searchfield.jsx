import './searchfield.css';

function Searchfield() {
    return (
        <section className="form-container">
            <form>
                <div className="search-field">
                    <input 
                        type="text" 
                        placeholder='' 
                        aria-label='Sök' 
                        className="search-img" />
                </div>
            </form>
        </section>
    );
}

export default Searchfield;