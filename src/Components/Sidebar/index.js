import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Sidebar = () => {
    return(
        <>
            <div className="sidebar">
                <div className="filterBox mb-5">
                    <h6 className='mb-2'>Product Categories</h6>
                    <div className='scroll mt-2 mb-3'>
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
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Category 6" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Category 7" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Category 8" />
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="filterBox">
                    <h6 className='mb-2'>Product Price</h6>

                </div>

            </div>
        </>
    )
}

export default Sidebar;