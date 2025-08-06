import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Sidebar = () => {
    return(
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6>Product Categories</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Category 1" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Category 2" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Category 3" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Category 4" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Category 5" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;