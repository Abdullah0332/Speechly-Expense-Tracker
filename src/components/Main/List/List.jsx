import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import { ExpenseTrackerContext } from "../../../context/context";

import useStyles from "./style";

const List = () => {
  const classes = useStyles();

  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((el) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={el.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  el.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={el.category}
              secondary={`$${el.amount} - ${el.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(el.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
