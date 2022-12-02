import React, { Component } from "react";



class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();

        const _imageLink = event.target.elements.link.value
        const _description = event.target.elements.description.value

        const post = {
            id: Number( new Date()),
            description: _description,
            imageLink: _imageLink
        }
        if (_imageLink && _description) {
            console.log(post.description)
            console.log(post.imageLink)
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }

    }
    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input tyepe="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>post</button>
                    </form>
                </div>

            </div>
        )
    }
}
export default AddPhoto