import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// 修复Leaflet默认图标问题 - 使用本地资源避免Tracking Prevention拦截
const icon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

interface MapProps {
  className?: string
}

const Map = ({ className = '' }: MapProps) => {
  // 公司地址：上海市虹口区广灵四路116号（精确坐标）
  const position: [number, number] = [31.2863545460331, 121.47997834403097]

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className={`w-full h-64 md:h-96 rounded-3xl ${className}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="text-sm">
            <p className="font-bold mb-1">Relaxi Studio</p>
            <p>上海市虹口区广灵四路116号</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map