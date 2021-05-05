import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import getCardButtonPropsByType, {cardButtonProps} from "./cardButtonTypes";

export default function CardButton(props: cardButtonProps) {
  const cardProps = getCardButtonPropsByType(props.name)
  const history = useHistory();
  const onButtonClick = useCallback(() => {
    if (props.onClick) props.onClick();
    if (cardProps.navigateTo) history.push(cardProps.navigateTo, cardProps.pushState);
  }, [history, cardProps.navigateTo, props, cardProps.pushState]);

  return (
    <div
      className="card-button"
      style={{
        background: `${cardProps.imageAttributes.bgColor} url('/assets/images/cardButton/${cardProps.imageAttributes.fileName}.svg') ${cardProps.imageAttributes.left}px ${cardProps.imageAttributes.top}px / ${cardProps.imageAttributes.width}px ${cardProps.imageAttributes.height}px no-repeat`,
      }}
    >
      <div className="card-button-content">
        <div className="card-button-title">{cardProps.title}</div>
        <div className="card-button-description">{cardProps.desc}</div>
      </div>
      <div className="card-button-select-container">
        <button
          className="ds-c-button card-button-select"
          onClick={onButtonClick}
          style={{ color: cardProps.imageAttributes.bgColor }}
        >
          {props.loading && (
            <>
              <span
                className="ds-c-spinner ds-c-spinner-small"
                aria-valuetext="Loading"
                role="progressbar"
              />
              &nbsp;
            </>
          )}
          {cardProps.buttonText}
        </button>
      </div>
    </div>
  );
}

