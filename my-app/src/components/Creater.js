import React from 'react';


const Creater = ({ type, onChangeForm, handleSubmit }) => {
    if (type === "book") {
        return(
            <div className="form-wrapper">
                <div className="form">
                    <form>
                        <div className="input-group">
                            <label>{type}</label>
                            <input 
                                type="text" 
                                onChange={(e) => onChangeForm(e)} 
                                name="book" 
                                placeholder="book" 
                            />
                        </div>
                        <div className="input-group">
                            <label>category</label>
                            <input 
                                type="text" 
                                onChange={(e) => onChangeForm(e)} 
                                name="category" 
                                placeholder="category" 
                            />
                        </div>
                        <div className="input-group">
                            <label>author</label>
                            <input 
                                type="text" 
                                onChange={(e) => onChangeForm(e)} 
                                name="author"
                                placeholder="author" 
                            />
                        </div>
                        <button 
                            className="submit-button"
                            onClick= {() => handleSubmit()}
                        >Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
    if (type === "todo") {
        return(
            <div className="form-wrapper">
                <div className="form">
                    <form>
                        <div className="input-group">
                            <label>{type}</label>
                            <input 
                                type="text" 
                                onChange={(e) => onChangeForm(e)} 
                                name="todo" 
                                placeholder="todo" 
                            />
                        </div>
                        <div className="input-group">
                            <label>category</label>
                            <input 
                                type="text" 
                                onChange={(e) => onChangeForm(e)} 
                                name="category" 
                                placeholder="category" 
                            />
                        </div>
                        <button 
                            className="submit-button"
                            onClick= {() => handleSubmit()}
                        >Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Creater;