import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import Title from './Title';


function preventDefault(event) {
    event.preventDefault();
}

export default function QuestionList({ questions }) {

    const questionsList = questions ? JSON.parse(questions) : [];

    return (
        <React.Fragment>
            <Title>Questions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Status On</TableCell>
                        <TableCell>Created date/time</TableCell>
                        <TableCell align="right">&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {questionsList === null || questionsList.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} align="center">
                                No data available
                            </TableCell>
                        </TableRow>
                    ) : (
                        questionsList.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>{row.createdAt}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="success">
                                        Comments
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}