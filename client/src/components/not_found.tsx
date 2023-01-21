import styled from "styled-components";

const NotFoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 500px;
    text-align: center;
    align-self: center;
`;
const NotFoundImage = styled.img`
    height: 200px;
`;
const NotFound = () => {
    return (
        <NotFoundWrapper>
            <NotFoundImage src="/not_found.svg" />
            <h2>Oops, no employees were found, try to add a new one.</h2>
        </NotFoundWrapper>
    );
};

export default NotFound;
