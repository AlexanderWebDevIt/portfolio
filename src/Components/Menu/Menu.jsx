import React from 'react';
import style from './Menu.module.css'
//
// const Menu = () => {
//     return (
//         <div className={style.menu}>
//             <select>
//                 <option value="grapefruit">Грейпфрут</option>
//                 <option>rturt</option>
//                 <option>rturt</option>
//                 <option>rturt</option>
//                 <option>rturt</option>
//
//             </select>
//         </div>
//     );
// };
//
// export default Menu;
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        let Вконтакте = Вконтакте;
        if (event.target.value === Вконтакте) {
            window.location.href = "https://vk.com/id650772899"
        }
    }

    render() {
        debugger
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Вконтакте</option>
                        <option value="lime">СоцСети</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Menu;