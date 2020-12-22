import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipebutton_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_favorite">
                <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton_flash">
                <FlashIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
