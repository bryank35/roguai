import React from "react";
import styled, {useTheme} from "styled-components";
import {ReactComponent as UpIcon} from '../../assets/images/drop-up.svg';

const Container = styled.div`
    // width:280px;
    margin-top: 38px;
    margin-left: 15.58px;
    display:flex;
`;

const Progress = styled.div`
        position:relative;
        overflow:hidden;
        width:280px;
        font-family: "Roboto", sans-serif;
        background:${({theme})=>theme.colors.progress1};
        border-radius:5px;
`;
const Bar = styled.div`
        display:block;
        float:left;
        width:0%;
        height:4px;
        background: ${({theme})=>theme.colors.progressbar1};
        border-radius:5px;

`;

const Banner = styled.div`
    color:white;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    margin-left: 10px;
    margin-top: -5px;
    & .up{
        position: absolute;
        margin-top: -10px;
        margin-left:2px;
    }
`;


const ProgressBar = ({ value }) => {
    const theme=useTheme();
    return (
        <Container>
            <div>
                <Progress>
                    <Bar style={{ width: value + '%' }} />
                </Progress>
            </div>

            <Banner>
                <UpIcon className="up" fill={theme.colors.mainColor} />
                12
            </Banner>
        </Container>
    )
};

export default ProgressBar;