import React from "react";

interface Props {
  params: Promise<{ meetingId: string }>;
}

const MeetingPage = ({}: Props) => {
  return <div>MeetingPage</div>;
};

export default MeetingPage;
