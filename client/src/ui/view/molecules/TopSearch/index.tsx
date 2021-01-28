import React, { useState, useEffect } from 'react';

import Box from '@view/atoms/Box';
import { DeleteIcon, SearchIcon } from '@view/atoms/SvgIcon';

import classes from './style.module.scss';

export interface TopSearchProps {
    onSearch?: (value: string) => void;
    onClick?: () => void;
    onFocus?: Function;
    timeDelay?: number;
    isLoading?: boolean;
}

const TopSearch: React.FC<TopSearchProps> = (props) => {
    const { onSearch, timeDelay = 0, isLoading, onClick, onFocus } = props;

    const [ state, setState ] = useState(() => {
        return {
            value: '',
            timeout: 0,
        };
    });

    useEffect(() => {
        const delay = setTimeout(() => {
            const time = new Date().getTime();
            if (time - state.timeout > timeDelay) {
                // onSearch && onSearch(state.value);
            }
        }, timeDelay);

        return () => {
            clearTimeout(delay);
        };
    }, [ state.value ]);

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();

        onSearch && onSearch(event.target.value);

        setState((prevState) => {
            return {
                ...prevState,
                value: event.target.value,
                timeout: new Date().getTime(),
            };
        });
    };

    return (
        <Box onClick={onClick} className={classes[ 'top-search' ]} bordered>
            <SearchIcon style={{ width: 10, height: 10 }} isActive />
            <Box className={classes[ 'top-search-input' ]}>
                <input onFocus={onFocus} type="text" onChange={handelChange} />
                {
                    isLoading && 'loading...'
                }
            </Box>
        </Box>
    );
};

export default TopSearch;
