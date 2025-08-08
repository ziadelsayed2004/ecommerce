import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'

const Sidebar = () => {
    const [value, setValue] = React.useState([100,60000]);
    // const [value2, setValue2] = React.useState(0);

    return(
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6 className='mb-2'>Product Categories</h6>
                    <div className='scroll mt-2 pl-3'>
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
                
                <div className="filterBox mt-5">
                    <h6 className='mb-2'>Product Price</h6>
                    <div className="mt-2 pl-3">
                        <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />
                        <div className='d-flex pt-2 pb-2 priceRange'>
                            <span className='ml-0'>From: <strong className='text-success'>{value[0]}</strong></span>
                            <span className='ml-auto'>To: <strong className='text-success'>{value[1]}</strong></span>
                        </div>
                    </div>
                </div>

                <div className="filterBox mt-5">
                    <h6 className='mb-2'>Product Status</h6>
                    <div className='mt-2 pl-3'>
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Out Of Stock" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="filterBox mt-5">
                    <h6 className='mb-2'>Brands</h6>
                    <div className='scroll mt-2 pl-3'>
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Brand 1" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Brand 2" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Brand 3" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Brand 4" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Brand 5" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Brand 6" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Brand 7" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Brand 8" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;