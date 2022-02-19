import './search-panel.scss';

export default function SearchPanel({search}) {
    return(
        <input type="text" 
        placeholder='type to search'
        onChange={({ target: { value } }) => search(value)}
         />
    );
}