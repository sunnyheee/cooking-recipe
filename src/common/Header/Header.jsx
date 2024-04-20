import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.style.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {change, controlVolume} from '../../redux/reducer/AudioComponentSlice';
import {OverlayTrigger} from "react-bootstrap";
import {PopoverSlider} from "./component/Popover";




const Header = ({keyword, setKeyword, searchByKeyword}) => {

    const navigator = useNavigate();
    const dispatch = useDispatch();

    const onClickHome = () => {
        navigator("/");
    }
    const onClickRecipe = () => {
        navigator("/recipe?q=popular");
    }
    const onClickContributers = () => {
        navigator("/contributers");
    }
    const onChangeAudioSwitch = () => {
        dispatch(change());
    }
    const onChangeAudioVolume = (volume) => {
        dispatch(controlVolume(volume/10));
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand onClick={onClickHome}>
                    <img
                        className="logo-img"
                        src="/images/recipe-logo.png"
                        alt="netflix"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{maxHeight: "100px"}}
                        navbarScroll
                    >

                        <Form>
                            <Form.Check
                                type="switch"
                                id="audio-switch"
                                className="me-2"
                                label={`music`}
                                onChange={onChangeAudioSwitch}
                                defaultChecked={false}
                            />
                        </Form>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={PopoverSlider(onChangeAudioVolume)}>
                            <img className="speaker-icon" src="/images/speaker-icon.svg" alt="cooking-recipe"/>
                        </OverlayTrigger>
                        <Nav.Link onClick={onClickHome}>Home</Nav.Link>
                        <Nav.Link onClick={onClickRecipe}>Recipe</Nav.Link>
                        <Nav.Link onClick={onClickContributers}>Contributers</Nav.Link>
                    </Nav>
                    <Form className="d-flex search-btn-area" onSubmit={searchByKeyword}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <Button
                            className="search-btn"
                            variant="outline-success"
                            type="submit"
                        >
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
