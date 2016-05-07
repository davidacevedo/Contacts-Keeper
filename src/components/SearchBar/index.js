import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className='SearchBar'>
                <form>
                    <input type="text" name="FirstName" value="Mickey"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}