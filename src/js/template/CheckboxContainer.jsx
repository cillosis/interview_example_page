import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../components/Checkbox.jsx';

const checkboxes = [
    {
        name: 'chk-show-birds',
        key: 'chk-show-birds-1',
        label: 'Birds',
        targetTag: 'bird'
    },
    {
        name: 'chk-show-cats',
        key: 'chk-show-cats',
        label: 'Cats',
        targetTag: 'cat'
    },
];

class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          checkedItems: new Map([
            ['chk-show-birds', true],
            ['chk-show-cats', true]
          ]),
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

        // Handle showing and hiding of cards
        const targetTag = e.target.getAttribute('targettag');
        const targetCards = document.querySelectorAll('.card[tag='+targetTag+']');
        if (targetCards instanceof NodeList && targetCards.length > 0) {
            if (isChecked) {
                for (var i = 0; i < targetCards.length; i++) {
                    if (! targetCards[i].classList.contains('visible')) {
                        targetCards[i].classList.add('visible');
                    }
                    if (targetCards[i].classList.contains('hidden')) {
                        targetCards[i].classList.remove('hidden');
                    }
                }
            } else {
                for (var i = 0; i < targetCards.length; i++) {
                    if (! targetCards[i].classList.contains('hidden')) {
                        targetCards[i].classList.add('hidden');
                    }
                    if (targetCards[i].classList.contains('visible')) {
                        targetCards[i].classList.remove('visible');
                    }
                }
            }
        }
    }

    render() {
        return (
            <React.Fragment>
            {
                checkboxes.map(item => (
                    <label key={item.key}>
                        <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} targetTag={item.targetTag} onChange={this.handleChange} />
                        &nbsp;{item.label}&nbsp;&nbsp;
                    </label>
                ))
            }
            </React.Fragment>
        );
    }
}

export default CheckboxContainer;