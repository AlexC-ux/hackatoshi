import { Hint, HintMessage, pageHintModel } from "entities/page-hint";
import { HintAction } from "features/page-hint";

export const PageHintWidget: React.FC = () => {
  const { messages, actions } = pageHintModel.provider.usePageHint();

  return (
    <>
      <Hint
        messages={messages.map((message) => (
          <HintMessage key={message} content={message} />
        ))}
        actions={actions.map((action) => (
          <HintAction key={action.id} id={action.id} content={action.title} />
        ))}
      />
    </>
  );
};
