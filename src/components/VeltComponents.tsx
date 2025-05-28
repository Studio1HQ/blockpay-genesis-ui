import { VeltCursor, VeltComments, VeltCommentTool } from '@veltdev/react';

export function VeltComponents() {
  return (
    <>
      {/* Displays cursors of other users */}
      <VeltCursor />
      
      {/* Enables comments functionality */}
      <VeltComments />
    </>
  );
} 