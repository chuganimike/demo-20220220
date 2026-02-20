import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import QuestionList from "./QuestionList";
import logo from "../../asset/spirit.png";

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBModalBody,
    MDBInput,
    MDBModalFooter

} from "mdb-react-ui-kit";

export default function HomeJsx(props) {
    const [basicModal, setBasicModal] = useState(false);
    let open = false

    const toggleModal = () => setBasicModal((prev) => !prev);
    const closeModal = () => setBasicModal(false);

    const drawerWidth = 240;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [statusC, setStatusC] = useState("OPEN");
    const [createdAt] = useState(new Date().toISOString());

    const saveQuestion = () => {

        const existingData = sessionStorage.getItem("questionsList");

        const questionsArray = existingData ? JSON.parse(existingData) : [];

        const newId = questionsArray.length > 0
            ? questionsArray[questionsArray.length - 1].id + 1
            : 1;

        const questionObject = {
            id: newId,
            title: title,
            description: description,
            status: status,
            createdAt: createdAt
        };

        questionsArray.push(questionObject);

        const jsonString = JSON.stringify(questionsArray);

        sessionStorage.setItem("questionsList", jsonString);

        closeModal();
    }

    const loadQuestions = () => {
        let content = sessionStorage.getItem("questionsList");
        return content;
    }

    let status ="OPEN";

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <AppBar position="absolute" open={open}>
                    <Toolbar sx={{ pr: "20px" }}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{ width: "25px", height: "25px" }}
                        />
                        <div style={{ fontWeight: "bold", marginLeft: "5px" }}>
                            Stack Underflow
                        </div>

                        {/* Question Management */}
                        <Box sx={{ ml: 3 }}>
                            <MDBDropdown>
                                <MDBDropdownToggle
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    Question Management
                                </MDBDropdownToggle>

                                <MDBDropdownMenu style={{ backgroundColor: "whitesmoke" }}>
                                    <MDBDropdownItem
                                        style={{ fontSize: "small" }}
                                        link
                                        onClick={toggleModal}
                                    >
                                        Create Question
                                    </MDBDropdownItem>

                                    <MDBDropdownItem style={{ fontSize: "small" }} link>
                                        Update Question
                                    </MDBDropdownItem>

                                    <MDBDropdownItem style={{ fontSize: "small" }} link>
                                        Delete Questions
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Account Info */}
                        <MDBDropdown>
                            <MDBDropdownToggle
                                style={{ backgroundColor: "transparent" }}
                            >
                                Account Information
                            </MDBDropdownToggle>

                            <MDBDropdownMenu style={{ backgroundColor: "whitesmoke" }}>
                                <MDBDropdownItem style={{ fontSize: "small" }} link>
                                    Profile
                                </MDBDropdownItem>

                                <MDBDropdownItem style={{ fontSize: "small" }} link>
                                    Change Password
                                </MDBDropdownItem>

                                <MDBDropdownItem
                                    style={{ fontSize: "small" }}
                                    link
                                    onClick={props.executeExit}
                                >
                                    Exit
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </Toolbar>
                </AppBar>

                {/* Modal */}
                <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
                    <MDBModalDialog centered size="lg">
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Create Question</MDBModalTitle>
                                <MDBBtn
                                    className="btn-close"
                                    color="none"
                                    onClick={closeModal}
                                />
                            </MDBModalHeader>

                            <MDBModalBody>
                                <MDBInput
                                    label="Title"
                                    type="text"
                                    className="mb-3"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />

                                <MDBInput
                                    label="Description"
                                    type="textarea"
                                    rows={4}
                                    className="mb-3"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <div className="mb-3">
                                    <label className="form-label">Status</label>
                                    <select
                                        className="form-select"
                                        value={statusC}
                                        onChange={(e) => setStatusC(e.target.value)}
                                    >
                                        <option value="OPEN">Open</option>
                                        <option value="IN_PROGRESS">Answered</option>
                                        <option value="CLOSED">Closed</option>
                                    </select>
                                </div>

                                <MDBInput
                                    label="Created Date/Time"
                                    type="text"
                                    value={new Date(createdAt).toLocaleString()}
                                    disabled
                                    className="mb-3"
                                />
                            </MDBModalBody>

                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={closeModal}>
                                    Cancel
                                </MDBBtn>
                                <MDBBtn color="primary" onClick={saveQuestion}>
                                    Save
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>

                {/* Main Content */}
                <Box
                    component="main"
                    sx={{
                        backgroundColor:
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        height: "100%",
                        width: "100%",
                    }}
                    style={{ backgroundColor: "ghostwhite" }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper
                                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                                >
                                    <QuestionList questions={loadQuestions()} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}