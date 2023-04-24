import Select from 'react-select';
import styles from './Select.module.css';

const SelectComponent = ({title, ...props}) => {
    return (
        <div className={styles.selectContainer}>
            <span>{title}</span>
            <Select {...props}/>
        </div>
    );
}
 
export default SelectComponent;