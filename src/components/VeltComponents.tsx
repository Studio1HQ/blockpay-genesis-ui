import { VeltCursor } from '@veltdev/react';

export function VeltComponents() {
  return (
    <>
      {/* Displays cursors of other users with proper z-index */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <VeltCursor />
      </div>
      
      {/* CSS to hide own cursor to prevent flickering */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hide Velt cursor for current user to prevent flickering */
          [data-velt-cursor*="current-user"] {
            display: none !important;
          }
          
          /* Alternative approach - hide cursors that are too close to bottom toolbar */
          .velt-cursor-wrapper {
            z-index: 9999 !important;
          }
          
          /* Hide cursor when near bottom toolbar (to prevent flickering) */
          [data-velt-cursor][style*="bottom: 0"],
          [data-velt-cursor][style*="bottom: 1"],
          [data-velt-cursor][style*="bottom: 2"],
          [data-velt-cursor][style*="bottom: 3"],
          [data-velt-cursor][style*="bottom: 4"],
          [data-velt-cursor][style*="bottom: 5"] {
            display: none !important;
          }
        `
      }} />
    </>
  );
} 