import { VeltCursor, VeltComments, VeltCommentTool } from '@veltdev/react';

export function VeltComponents() {
  return (
    <>
      {/* Displays cursors of other users */}
      <VeltCursor />
      
      {/* Enables comments functionality */}
      <VeltComments />
      
      {/* Comment tool button - positioned for better visibility */}
      <div className="fixed bottom-24 right-6 z-40">
        <VeltCommentTool />
      </div>
    </>
  );
} 