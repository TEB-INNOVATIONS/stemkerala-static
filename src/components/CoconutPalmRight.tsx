import React from 'react';

interface PalmProps {
  className?: string;
  parallaxOffset?: { x: number; y: number };
}

export const CoconutPalmRight: React.FC<PalmProps> = ({ className = '', parallaxOffset = { x: 0, y: 0 } }) => {
  return (
    <div 
      className={`palm-wrapper palm-right ${className}`}
      style={{
        transform: `translate3d(${parallaxOffset.x * -10}px, ${parallaxOffset.y * 6}px, 0)`
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 520 950"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="palm-svg"
        preserveAspectRatio="xMaxYMax meet"
      >
        <defs>
          <linearGradient id="rightTrunkGrad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#043818" />
            <stop offset="45%" stopColor="#054e22" />
            <stop offset="75%" stopColor="#075525" />
            <stop offset="100%" stopColor="#08752D" />
          </linearGradient>

          <linearGradient id="frondGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a8e38" />
            <stop offset="50%" stopColor="#08752D" />
            <stop offset="85%" stopColor="#075525" />
            <stop offset="100%" stopColor="#043316" />
          </linearGradient>

          <linearGradient id="frondHighlightRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0fb047" />
            <stop offset="60%" stopColor="#08752D" />
            <stop offset="100%" stopColor="#05451e" />
          </linearGradient>
        </defs>

        {/* Tree cantilever assembly — base anchored at bottom-right */}
        <g className="palm-tree-system right-tree-system">
          {/* Main Trunk */}
          <g className="palm-trunk-layer">
            <path
              d="M 465 950
                 C 450 810, 430 680, 395 550
                 C 360 420, 315 310, 260 225
                 L 238 228
                 C 290 325, 330 435, 360 565
                 C 390 695, 410 820, 420 950
                 Z"
              fill="url(#rightTrunkGrad)"
            />

            {/* Trunk Bark Rings */}
            <path d="M 448 895 Q 435 898 425 895" stroke="#032711" strokeWidth="3" strokeLinecap="round" />
            <path d="M 440 852 Q 426 856 416 852" stroke="#032711" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 432 808 Q 418 812 408 808" stroke="#032711" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 423 762 Q 409 766 399 762" stroke="#032711" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M 412 718 Q 398 722 388 717" stroke="#032711" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M 399 672 Q 384 676 375 671" stroke="#032711" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 386 626 Q 371 630 361 625" stroke="#032711" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 370 580 Q 355 584 346 579" stroke="#032711" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 353 532 Q 338 536 329 531" stroke="#032711" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 334 485 Q 319 489 311 484" stroke="#032711" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 314 435 Q 299 439 292 434" stroke="#032711" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 292 380 Q 277 384 271 379" stroke="#032711" strokeWidth="2.0" strokeLinecap="round" />
            <path d="M 270 325 Q 257 329 251 323" stroke="#032711" strokeWidth="2.0" strokeLinecap="round" />
            <path d="M 252 265 Q 242 268 238 263" stroke="#032711" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Crown Canopy Assembly Right — Mechanically locked to trunk apex */}
          <g className="palm-crown-hub right-crown-hub">
            {/* Coconuts Cluster */}
            <g className="coconuts-cluster right-coconuts">
              <ellipse cx="229" cy="233" rx="14" ry="17" transform="rotate(18 229 233)" fill="#043818" stroke="#064f22" strokeWidth="1.5" />
              <ellipse cx="251" cy="239" rx="15" ry="18" transform="rotate(-8 251 239)" fill="#064f22" stroke="#032711" strokeWidth="1.5" />
              <ellipse cx="217" cy="245" rx="13" ry="16" transform="rotate(25 217 245)" fill="#05451e" stroke="#043818" strokeWidth="1.5" />
              <ellipse cx="241" cy="251" rx="14" ry="17" transform="rotate(-12 241 251)" fill="#08752D" stroke="#032711" strokeWidth="1.5" />
              <path d="M 213 227 Q 233 221 253 225 Q 241 239 221 235 Z" fill="#032711" opacity="0.8" />
            </g>

            {/* Frond R1: Arching toward center-left */}
            <g className="palm-leaf-branch right-branch-1">
              <path
                d="M 250 225 Q 180 135 110 95 Q 60 75 0 70"
                stroke="#043818"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 250 225
                   C 200 165 140 115 70 85
                   C 40 75 15 71 0 70
                   C 30 90 75 115 130 150
                   C 180 185 215 210 242 228
                   Z"
                fill="url(#frondHighlightRight)"
              />
              <path d="M 170 135 L 145 170 M 140 115 L 110 152 M 110 102 L 75 136 M 70 90 L 35 120 M 35 80 L 10 105" stroke="#05451e" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Frond R2: Upward skyward frond */}
            <g className="palm-leaf-branch right-branch-2">
              <path
                d="M 250 225 Q 310 125 380 55 Q 430 12 485 0"
                stroke="#043818"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 250 225
                   C 278 185, 320 135, 370 55
                   C 390 37, 430 17, 485 0
                   C 470 24, 455 50, 435 82
                   C 400 132, 355 192, 255 230
                   Z"
                fill="url(#frondGradRight)"
              />
              <path d="M 380 50 L 415 90 M 360 67 L 395 110 M 335 90 L 370 137 M 310 120 L 345 167 M 285 155 L 315 200" stroke="#064f22" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 440 22 L 460 50 M 420 30 L 445 65 M 400 40 L 425 80" stroke="#08752D" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Frond R3: Broad right sweep */}
            <g className="palm-leaf-branch right-branch-3">
              <path
                d="M 252 226 Q 340 185 410 205 Q 470 225 505 275"
                stroke="#043818"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 252 226
                   C 320 180, 380 195, 440 225
                   C 475 245, 495 265, 505 275
                   C 487 280, 460 265, 420 250
                   C 365 230, 310 225, 254 234
                   Z"
                fill="url(#frondGradRight)"
              />
              <path d="M 320 197 L 350 235 M 355 203 L 390 245 M 390 215 L 430 260 M 425 233 L 465 275 M 455 250 L 488 287" stroke="#08752D" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Frond R4: Center erect spike */}
            <g className="palm-leaf-branch right-branch-4">
              <path
                d="M 250 220 Q 260 115 290 55 Q 310 20 340 5"
                stroke="#054e22"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 250 220
                   C 258 145, 275 85, 305 40
                   C 320 20, 332 10, 340 5
                   C 328 20, 310 60, 285 115
                   C 265 160, 255 195, 248 220
                   Z"
                fill="url(#frondHighlightRight)"
              />
              <path d="M 265 145 L 295 170 M 278 105 L 310 133 M 295 65 L 325 93 M 315 33 L 338 55" stroke="#08752D" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* Frond R5: Mid-left cascading frond */}
            <g className="palm-leaf-branch right-branch-5">
              <path
                d="M 246 228 Q 160 230 90 260 Q 30 290 0 350"
                stroke="#043818"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 246 228
                   C 185 225, 120 245, 60 285
                   C 25 310, 2 335 0 350
                   C 20 355, 65 335, 120 305
                   C 175 275, 225 250, 248 236
                   Z"
                fill="url(#frondGradRight)"
              />
              <path d="M 190 235 L 160 275 M 150 248 L 115 290 M 110 268 L 70 312 M 70 290 L 30 335 M 35 318 L 2 355" stroke="#032711" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Frond R6: Deep right lower hanging frond */}
            <g className="palm-leaf-branch right-branch-6">
              <path
                d="M 254 232 Q 330 260 390 320 Q 440 380 465 460"
                stroke="#032711"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 254 232
                   C 310 255, 360 300, 405 360
                   C 435 400, 455 435, 465 460
                   C 452 450, 425 400, 385 350
                   C 340 295, 290 260, 255 240
                   Z"
                fill="url(#frondHighlightRight)"
              />
              <path d="M 305 260 L 335 305 M 340 288 L 375 340 M 375 325 L 415 385 M 405 370 L 445 430 M 432 415 L 458 465" stroke="#043818" strokeWidth="2.4" strokeLinecap="round" />
            </g>

            {/* Frond R7: Left drooping lower frond */}
            <g className="palm-leaf-branch right-branch-7">
              <path
                d="M 244 235 Q 170 300 120 380 Q 80 450 60 530"
                stroke="#032711"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 244 235
                   C 195 280, 150 340, 110 420
                   C 85 470, 68 505, 60 530
                   C 70 500, 102 440, 140 370
                   C 180 305, 225 260, 248 242
                   Z"
                fill="url(#frondGradRight)"
              />
              <path d="M 205 275 L 170 305 M 172 318 L 132 352 M 142 365 L 100 405 M 112 420 L 75 465 M 85 478 L 58 525" stroke="#064f22" strokeWidth="2.4" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
