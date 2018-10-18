import React from 'react';
import ColorChip from './ColorChip';

class ColorSelector extends React.PureComponent {
    render() {
        const { colors, toggleColor } = this.props;
        const colorChips = colors.map((color, idx) => {
            return <ColorChip key={color.id} color={color.color} toggleColor={() => toggleColor(color.color)}/>
        });
        return (
            <div>
                {colorChips}
            </div>
        );
  }
}

export default ColorSelector;