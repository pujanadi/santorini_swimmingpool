export type IconName =
  | 'pin' | 'ticket' | 'clock' | 'utensils' | 'mosque' | 'car'
  | 'calendar' | 'chat' | 'instagram' | 'chevron' | 'menu' | 'close' | 'camera'

const paths: Record<IconName, string> = {
  pin: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  ticket: 'M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4V8Zm10-2v12',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2',
  utensils: 'M7 3v8M4 3v6a3 3 0 0 0 6 0V3M7 11v10M17 21V3c-2.5 1.5-3.5 4.5-3.5 8H17',
  mosque: 'M12 3c-1.5 2-3 3-3 5a3 3 0 0 0 6 0c0-2-1.5-3-3-5ZM5 21v-8h14v8M3 21h18M9.5 21v-4a2.5 2.5 0 0 1 5 0v4',
  car: 'M5 16V12l2-5h10l2 5v4M3 16h18v3H3zM7 12h10M7.5 19v2M16.5 19v2',
  calendar: 'M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 5h14M8 3v4m8-4v4M8 14h2m4 0h2M8 17h2',
  chat: 'M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Zm4 5h8M8 13h5',
  instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.8-2.3h.01',
  chevron: 'm6 9 6 6 6-6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'm6 6 12 12M18 6 6 18',
  camera: 'M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 2.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z',
}

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  )
}
