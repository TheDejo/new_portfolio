import React, { Children } from 'react';
import Icons from '../utils/Icons';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: IProps) => {
    return (
        <div>
            {Icons.Open()}
            {children}
        </div>
    );
};

export default Layout;
