import React from 'react';

interface PalmProps {
  className?: string;
  parallaxOffset?: { x: number; y: number };
}

export const CoconutPalmLeft: React.FC<PalmProps> = ({ className = '', parallaxOffset = { x: 0, y: 0 } }) => {
  return (
    <div 
      className={`palm-wrapper palm-left ${className}`}
      style={{
        transform: `translate3d(${parallaxOffset.x * 10}px, ${parallaxOffset.y * 6}px, 0)`
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 520 950"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="palm-svg"
        preserveAspectRatio="xMinYMax meet"
      >
        <defs>
          <linearGradient id="leftTrunkGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#043818" />
            <stop offset="40%" stopColor="#054e22" />
            <stop offset="75%" stopColor="#075525" />
            <stop offset="100%" stopColor="#08752D" />
          </linearGradient>

          <linearGradient id="frondGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a8e38" />
            <stop offset="50%" stopColor="#08752D" />
            <stop offset="85%" stopColor="#075525" />
            <stop offset="100%" stopColor="#043316" />
          </linearGradient>

          <linearGradient id="frondHighlightLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0fb047" />
            <stop offset="60%" stopColor="#08752D" />
            <stop offset="100%" stopColor="#05451e" />
          </linearGradient>
        </defs>

        {/* Tree cantilever assembly — base anchored at bottom-left */}
        <g className="palm-tree-system left-tree-system">
          {/* Main Trunk */}
          <g className="palm-trunk-layer">
            <path
              d="M 50 950
                 C 65 820, 85 700, 115 570
                 C 145 440, 185 320, 240 215
                 L 262 218
                 C 210 330, 175 450, 148 580
                 C 120 710, 105 830, 95 950
                 Z"
              fill="url(#leftTrunkGrad)"
            />

            {/* Trunk Nodes / Cicatrices */}
            <path d="M 68 890 Q 82 894 92 892" stroke="#032711" strokeWidth="3" strokeLinecap="round" />
            <path d="M 73 850 Q 88 854 98 851" stroke="#032711" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 80 805 Q 96 809 106 806" stroke="#032711" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 88 760 Q 104 764 114 761" stroke="#032711" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M 97 715 Q 114 719 124 715" stroke="#032711" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M 108 670 Q 125 674 135 670" stroke="#032711" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 119 625 Q 137 629 146 625" stroke="#032711" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 132 580 Q 150 584 159 580" stroke="#032711" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 146 535 Q 164 539 173 534" stroke="#032711" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 161 490 Q 179 494 188 489" stroke="#032711" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 178 440 Q 196 444 204 439" stroke="#032711" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 197 390 Q 215 394 222 388" stroke="#032711" strokeWidth="2.0" strokeLinecap="round" />
            <path d="M 218 335 Q 235 339 241 333" stroke="#032711" strokeWidth="2.0" strokeLinecap="round" />
            <path d="M 238 275 Q 252 278 257 273" stroke="#032711" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Crown Canopy Assembly — Mechanically locked to the apex of the trunk */}
          <g className="palm-crown-hub left-crown-hub">
            {/* Coconuts Cluster */}
            <g className="coconuts-cluster left-coconuts">
              <ellipse cx="241" cy="223" rx="14" ry="17" transform="rotate(-15 241 223)" fill="#043818" stroke="#064f22" strokeWidth="1.5" />
              <ellipse cx="259" cy="227" rx="15" ry="18" transform="rotate(10 259 227)" fill="#064f22" stroke="#032711" strokeWidth="1.5" />
              <ellipse cx="225" cy="231" rx="13" ry="16" transform="rotate(-28 225 231)" fill="#08752D" stroke="#043818" strokeWidth="1.5" />
              <ellipse cx="249" cy="239" rx="13" ry="16" transform="rotate(5 249 239)" fill="#05451e" stroke="#032711" strokeWidth="1.5" />
              <path d="M 227 215 Q 247 210 263 213 Q 253 227 231 223 Z" fill="#032711" opacity="0.8" />
            </g>

            {/* Frond 1: Skyward Up-Left Frond */}
            <g className="palm-leaf-branch left-branch-1">
              <path
                d="M 250 215 Q 200 120 130 50 Q 80 8 30 0"
                stroke="#043818"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 250 215
                   C 220 180, 180 130, 130 50
                   C 110 32, 70 12, 30 0
                   C 45 22, 60 48, 80 80
                   C 115 130, 160 190, 245 222
                   Z"
                fill="url(#frondGradLeft)"
              />
              <path d="M 120 45 L 85 85 M 140 62 L 105 105 M 165 85 L 130 132 M 190 115 L 155 162 M 215 150 L 185 195" stroke="#064f22" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 60 18 L 40 45 M 80 25 L 55 60 M 100 35 L 75 75" stroke="#08752D" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Frond 2: Arching over to the right */}
            <g className="palm-leaf-branch left-branch-2">
              <path
                d="M 250 215 Q 310 130 380 90 Q 430 70 490 65"
                stroke="#043818"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 250 215
                   C 290 160, 350 110, 420 80
                   C 450 70, 475 66, 490 65
                   C 460 85, 415 110, 360 145
                   C 310 180, 275 205, 252 220
                   Z"
                fill="url(#frondHighlightLeft)"
              />
              <path d="M 320 130 L 345 165 M 350 110 L 380 148 M 380 98 L 415 132 M 420 85 L 455 115 M 455 75 L 480 100" stroke="#05451e" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Frond 3: Broad left sweep cascading downward */}
            <g className="palm-leaf-branch left-branch-3">
              <path
                d="M 248 216 Q 160 180 90 200 Q 30 220 0 270"
                stroke="#043818"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 248 216
                   C 180 175, 120 190, 60 220
                   C 25 240, 5 260, 0 270
                   C 18 275, 45 260, 85 245
                   C 140 225, 195 220, 246 226
                   Z"
                fill="url(#frondGradLeft)"
              />
              <path d="M 180 192 L 150 230 M 145 198 L 110 240 M 110 210 L 70 255 M 75 228 L 35 270 M 45 245 L 12 282" stroke="#08752D" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Frond 4: Mid-right cascading frond */}
            <g className="palm-leaf-branch left-branch-4">
              <path
                d="M 252 218 Q 340 220 410 250 Q 470 280 510 340"
                stroke="#043818"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 252 218
                   C 310 215, 380 235, 440 275
                   C 475 300, 498 325, 510 340
                   C 485 345, 440 325, 385 295
                   C 330 265, 280 240, 250 226
                   Z"
                fill="url(#frondGradLeft)"
              />
              <path d="M 310 225 L 340 265 M 350 238 L 385 280 M 390 258 L 430 302 M 430 280 L 470 325 M 465 308 L 498 345" stroke="#032711" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Frond 5: Deep left lower drooping frond */}
            <g className="palm-leaf-branch left-branch-5">
              <path
                d="M 246 222 Q 170 250 110 310 Q 60 370 35 450"
                stroke="#032711"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 246 222
                   C 190 245, 140 290, 95 350
                   C 65 390, 45 425, 35 450
                   C 48 440, 75 390, 115 340
                   C 160 285, 210 250, 245 230
                   Z"
                fill="url(#frondHighlightLeft)"
              />
              <path d="M 195 250 L 165 295 M 160 278 L 125 330 M 125 315 L 85 375 M 95 360 L 55 420 M 68 405 L 42 455" stroke="#043818" strokeWidth="2.4" strokeLinecap="round" />
            </g>

            {/* Frond 6: Central erect crownlet */}
            <g className="palm-leaf-branch left-branch-6">
              <path
                d="M 250 212 Q 240 110 210 50 Q 190 15 160 0"
                stroke="#054e22"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 250 212
                   C 242 140, 225 80, 195 35
                   C 180 15, 168 5, 160 0
                   C 172 15, 190 55, 215 110
                   C 235 155, 245 190, 252 215
                   Z"
                fill="url(#frondHighlightLeft)"
              />
              <path d="M 235 140 L 205 165 M 222 100 L 190 128 M 205 60 L 175 88 M 185 28 L 162 50" stroke="#08752D" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* Frond 7: Right drooping lower frond */}
            <g className="palm-leaf-branch left-branch-7">
              <path
                d="M 254 225 Q 330 290 380 370 Q 420 440 440 520"
                stroke="#032711"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 254 225
                   C 305 270, 350 330, 390 410
                   C 415 460, 432 495, 440 520
                   C 430 490, 398 430, 360 360
                   C 320 295, 275 250, 252 232
                   Z"
                fill="url(#frondGradLeft)"
              />
              <path d="M 295 265 L 330 295 M 328 308 L 368 342 M 358 355 L 400 395 M 388 410 L 425 455 M 415 468 L 442 515" stroke="#064f22" strokeWidth="2.4" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
