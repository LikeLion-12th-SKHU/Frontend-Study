export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) { // wrapper component
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}