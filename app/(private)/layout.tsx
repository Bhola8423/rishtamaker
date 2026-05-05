import DashboardLayout from '@/layouts/DashboardLayout'
import React from 'react'

const PrivateLayout = ({children}:{children : React.ReactNode}) => {
  return (
    <DashboardLayout>
        {children}
    </DashboardLayout>
  )
}

export default PrivateLayout
