import React from "react";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import { Link } from 'react-router-dom';

export default function DashboardCard() {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-6 md:gap-4 sm:gap-2'>
            <Link
                to="/winner"
            >
                <div className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md border">
                    <div className="flex justify-between items-center">
                        <div className='py-4 px-6 text-base-100'>
                            <h2 className="card-title uppercase">Winner</h2>
                            <span>56</span>
                        </div>
                        <div>
                            <EmojiEventsOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                        </div>
                    </div>
                </div>
            </Link>

            <Link
                to="/popular"
            >
                <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md border">
                    <div className="flex justify-between items-center">
                        <div className='py-4 px-6 text-base-100'>
                            <h2 className="card-title uppercase">Totally Customer</h2>
                            <span>67</span>
                        </div>
                        <div>
                            <FolderCopyOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                        </div>
                    </div>
                </div>
            </Link>

            <Link
                to="/default"
            >
                <div className="rounded-xl bg-gradient-to-r from-gray-400 to-gray-300 shadow-md border">
                    <div className="flex justify-between items-center">
                        <div className='py-4 px-6 text-white'>
                            <h2 className="card-title uppercase">Setup Default</h2>
                            <span>..................</span>
                        </div>
                        <div>
                            <FileDownloadOutlinedIcon sx={{ fontSize: 100 }} className='opacity-20 rotate-12' />
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    )
}
