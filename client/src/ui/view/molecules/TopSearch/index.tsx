import React, { useState, useEffect, createRef } from 'react';

import Box from '@view/atoms/Box';
import { DeleteIcon, SearchIcon } from '@view/atoms/SvgIcon';

import classes from './style.module.scss';
import useUser from 'src/ui/viewModels/useUser';
import { useHistory } from 'react-router';
import ProfileCard from '../ProfileCard';
import User from '@entities/user';
import Avatar from '@view/atoms/Avatar';
import { debounce } from '@helper/functions';
import useClickOutside from '@hook/useClickOutside';
import Loading from '@view/atoms/Loading';

const TopSearch = (props) => {
    const { search } = useUser()
    const history = useHistory()
    const searchDataRef: any = createRef()
    const searchFormRef: any = createRef()
    const [ state, setState ] = useState(() => {
        return {
            value: '',
            openSearchBox: false
        };
    });

    useClickOutside([ searchDataRef, searchFormRef ], (event) => {
        setState(prev => ({ ...prev, openSearchBox: false }))
    })

    const handleSearch = debounce(function (value) {
        if (value == "") {
            setState((prev) => {
                return { ...prev, openSearchBox: false }
            })
        }
        search.execute({ userName: value == "" ? null : value }).then(res => {
            if (value) {
                setState((prev) => {
                    return { ...prev, openSearchBox: true }
                })
            }
        })
    }, 500);

    return (
        <div className={classes[ 'header-search' ]} ref={searchFormRef}>
            <Box className={classes[ 'top-search' ]} bordered>
                <SearchIcon style={{ width: 10, height: 10 }} isActive />
                <Box className={classes[ 'top-search-input' ]}>
                    <input
                        onFocus={(e) => {
                            if (e.target.value != "") {
                                setState(prev => ({ ...prev, openSearchBox: true }))
                            }
                        }} type="text" onChange={e => handleSearch(e.target.value)}
                    />
                </Box>
            </Box>
            <div ref={searchDataRef}>
                {
                    state.openSearchBox && search?.value &&
                    <Box className={classes[ 'header-search-data' ]} bordered>
                        {
                            search?.value?.length != 0 ?
                                search?.value?.map((user: User, index) => (
                                    <div onClick={() => {
                                        history.push(`/profile/${ user._id }`)
                                        setState(prev => ({ ...prev, openSearchBox: false }))
                                    }}>
                                        <ProfileCard
                                            key={user._id}
                                            icon={<Avatar src={user.avatar} />}
                                            title={user.userName}
                                            subtitle={user.fullName}
                                        />
                                    </div>
                                )) : "nodata"
                        }
                    </Box>
                }
            </div>
            {search.status == "loading" && <Loading className={classes[ "loading-search" ]} />}
        </div>
    );
};

export default TopSearch;
